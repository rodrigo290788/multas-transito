export const getIndexedDBData = async () => {
  return new Promise((resolve, reject) => {
    const dbPromise = indexedDB.open('TrafficFinesDB', 1);

    dbPromise.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['fines'], 'readonly');
      const store = transaction.objectStore('fines');
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };

      getAllRequest.onerror = () => {
        reject('Error fetching data from IndexedDB');
      };
    };

    dbPromise.onerror = (event) => {
      console.error('Database error:', event.target.errorCode);
      reject('Error opening IndexedDB');
    };
  });
};