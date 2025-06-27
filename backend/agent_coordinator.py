# backend/agent_coordinator.py
# Central coordinator to manage and orchestrate agents

class AgentCoordinator:
    def __init__(self):
        self.agents = {}

    def register_agent(self, agent_id, agent):
        self.agents[agent_id] = agent

    def unregister_agent(self, agent_id):
        if agent_id in self.agents:
            del self.agents[agent_id]

    def send_command(self, agent_id, command):
        if agent_id in self.agents:
            self.agents[agent_id].execute_command(command)

    def broadcast(self, message):
        for agent in self.agents.values():
            agent.receive_message(message)

