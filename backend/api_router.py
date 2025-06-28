from fastapi import FastAPI, Request
from pydantic import BaseModel
from backend.agent_coordinator import AgentCoordinator
from backend.routes import ws_agent_events  # ⬅️ Add this

app = FastAPI()
app.include_router(ws_agent_events.router)  # ⬅️ And this

router = None  # Will hold the APIRouter instance

class UserInput(BaseModel):
    input: str
    session_id: str

class APIRouter:
    def __init__(self):
        self.coordinator = AgentCoordinator()
        self.coordinator.initialize_system()

    def process_request(self, user_input: str, session_id: str):
        print(f"[APIRouter] Received input: {user_input}")
        result = self.coordinator.handle_input(user_input, session_id)
        return {
            "session": session_id,
            "input": user_input,
            "output": result
        }

    def run_system_diagnostics(self):
        return self.coordinator.run_diagnostics()

@app.on_event("startup")
def init_router():
    global router
    router = APIRouter()

@app.post("/api/query")
async def query(request: UserInput):
    return router.process_request(request.input, request.session_id)

@app.get("/api/diagnostics")
async def diagnostics():
    return router.run_system_diagnostics()
