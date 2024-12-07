class Singleton:
    """
        Шаблон Singleton
    """
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '_instance'):
            cls._instance = super(Singleton, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance