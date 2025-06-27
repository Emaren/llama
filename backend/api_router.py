\"\"\"
api_router.py – Handles incoming input and routes it to the AgentCoordinator.
Acts as a glue layer between external API calls and internal logic.
\"\"\"

from backend.agent_coordinator import AgentCoordinator

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
