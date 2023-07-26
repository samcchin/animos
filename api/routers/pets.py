from fastapi import (
    Depends,
    APIRouter,
)
from queries.pets import PetQueries
from queries.accounts import AccountQueries
from models import PetIn, PetOut, PetsList
from bson import ObjectId
from .auth import authenticator

router = APIRouter()


@router.post("/api/pets", response_model=PetOut)
def create_pet(
    pet: PetIn,
    repo: PetQueries = Depends(),
    account_repo: AccountQueries = Depends(),
    account: dict = Depends(authenticator.try_get_current_account_data),
):
    pet = repo.create(pet)
    account_repo.add_pet(pet)
    return pet


@router.get("/api/pets", response_model=PetsList)
def get_pets(
    repo: PetQueries = Depends(),
    account: dict = Depends(authenticator.try_get_current_account_data),
):
    return PetsList(pets=repo.get_pets())


@router.get("/api/pets/{id}", response_model=PetOut)
def get_pet(
    id: str,
    repo: PetQueries = Depends(),
    account: dict = Depends(authenticator.try_get_current_account_data),
):
    pet = repo.get_pet({"_id": ObjectId(id)})
    return pet


@router.put("/api/pets/{id}", response_model=PetOut)
async def update_pet(
    id: str,
    pet: PetIn,
    repo: PetQueries = Depends(),
    account: dict = Depends(authenticator.try_get_current_account_data),
):
    pet = repo.update_pet(id, pet)
    return pet


@router.delete("/api/pets/{id}", response_model=bool)
def delete_pet(
    id: str,
    repo: PetQueries = Depends(),
    account: dict = Depends(authenticator.try_get_current_account_data),
):
    return repo.delete_pet({"_id": ObjectId(id)})
