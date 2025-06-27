\"\"\"
agent_coordinator.py – Central hub that initializes and orchestrates core agents,
dispatches tasks to modules based on scope, type, and system state.
\"\"\"

from backend.module_dispatcher import ModuleDispatcher
from backend.agent_scheduler import AgentScheduler
from backend.config_manager import ConfigManager
from backend.health_checker import HealthChecker
from backend.feedback_tracker import FeedbackTracker
from backend.context_scope_analyzer import ContextScopeAnalyzer
from shared.constants import SYSTEM_BOOT_SEQUENCE

class AgentCoordinator:
    def __init__(self):
        self.config = ConfigManager().load_config()
        self.dispatcher = ModuleDispatcher()
        self.scheduler = AgentScheduler()
        self.health_checker = HealthChecker()
        self.feedback_tracker = FeedbackTracker()
        self.scope_analyzer = ContextScopeAnalyzer()

    def initialize_system(self):
        print("[AgentCoordinator] Booting agents...")
        for agent in SYSTEM_BOOT_SEQUENCE:
            self.scheduler.schedule(agent)
        print("[AgentCoordinator] Boot complete.")

    def handle_input(self, user_input: str, session_id: str):
        context_scope = self.scope_analyzer.analyze(user_input)
        task = self.dispatcher.route(user_input, context_scope)
        result = self.scheduler.execute(task, session_id)
        self.feedback_tracker.track(session_id, result)
        return result

    def run_diagnostics(self):
        return self.health_checker.check_system()

