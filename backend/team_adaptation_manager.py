class TeamAdaptationManager:
    def __init__(self):
        self.adaptations = {}

    def record_adaptation(self, agent_name, adaptation):
        if agent_name not in self.adaptations:
            self.adaptations[agent_name] = []
        self.adaptations[agent_name].append(adaptation)

    def get_adaptations(self, agent_name):
        return self.adaptations.get(agent_name, [])
