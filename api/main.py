from fastapi import FastAPI
from api.api import agents, containers, skins
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CSGO Skins Explorer API",
    description="API for skins data",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(agents.router, prefix="/agents", tags=["Agents"])
app.include_router(containers.router, prefix="/containers", tags=["Containers"])
app.include_router(skins.router, prefix="/skins", tags=["Skins"])
