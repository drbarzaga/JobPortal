export default class StorageService {
  // This function is used to set an item in the local storage
  public static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // This function is used to get an item from the local storage
  public static getItem(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // This function is used to remove an item from the local storage
  public static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
