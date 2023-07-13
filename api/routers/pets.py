from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from .auth import authenticator
from pydantic import BaseModel
from queries.pets import PetQueries
from models import PetIn, PetOut, PetsList
from bson import ObjectId
# class AccountForm(BaseModel):
#     username: str
#     password: str

# class AccountToken(Token):
#     account: AccountOut

# class HttpError(BaseModel):
#     detail: str

router = APIRouter()


# not_authorized = HTTPException(
#     status_code=status.HTTP_401_UNAUTHORIZED,
#     detail="Invalid authentication credentials",
#     headers={"WWW-Authenticate": "Bearer"},
# )

@router.post("/api/pets", response_model=PetOut)
def create_pet(
    pet: PetIn,
    repo: PetQueries = Depends()
):
    pet = repo.create(pet)
    return pet

@router.get("/api/pets", response_model=PetsList)
def get_pets(repo: PetQueries = Depends()):
    return PetsList(pets=repo.get_pets())

@router.get("/api/pets/{id}", response_model=PetOut)
def get_pet(
    id: str,
    repo: PetQueries = Depends()
    ):
    pet = repo.get_pet({"_id": ObjectId(id)})
    return pet

@router.put("/api/pets/{id}", response_model=PetOut)
async def update_pet(
    id: str,
    pet: PetIn,
    repo: PetQueries = Depends()
    ):
    pet = repo.update_pet(id, pet)
    return pet

@router.delete("/api/pets/{id}", response_model=bool)
def delete_pet(
    id: str,
    repo: PetQueries = Depends()
):
    return repo.delete_pet({"_id": ObjectId(id)})