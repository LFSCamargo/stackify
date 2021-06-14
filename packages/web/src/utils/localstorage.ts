/** @description = A safer way to use the storage */
class SafeStorage {
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  /** @description = Get's the token from the localstorage */
  getToken = () => this.storage.getItem('token');

  /** @description = Updatest the token that is inside the storage */
  updateToken = (token: string) => this.storage.setItem('token', token)

  /** @description = Gets an item from the desired storage */
  getItem = (key: string) => this.storage.getItem(key);

  /** @description = Sets a new item into the desired storage */
  setItem = (key: string, value: string) => this.storage.setItem(key, value);

  /** @description = Allows you to remove multiple keys */
  removeMultiple = async (keys: string[]): Promise<void> => {
    await Promise.all(
      keys.map(async (item) => {
        this.storage.removeItem(item);
      }),
    );
  };
}

export const localSafeStorage = new SafeStorage(localStorage);