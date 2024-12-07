from utils.singleton_pattern import Singleton


class LocalMemory(Singleton):
    def __init__(self):
        if self._initialized:
            return
        self._initialized = True
        self.memory = {}

    def set(self, key, value):
        self.memory[key] = value

    def get(self, key):
        return self.memory[key]

    def delete(self, key):
        del self.memory[key]

    def clear(self):
        self.memory = {}