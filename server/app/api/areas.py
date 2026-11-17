from fastapi import APIRouter

router = APIRouter(prefix="/areas", tags=["areas"])


@router.get("")
def list_areas():
    # TODO: return list of districts
    return []
