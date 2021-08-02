let db;

const request = indexedDB.open("tracking_budgets", 1);
// save a reference to the database and create an object store called `new_fund`
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("new_fund", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(["new_fund"], "readwrite");

  const fundObjectStore = transaction.objectStore("new_fund");

  fundObjectStore.add(record);
}
// sends data from indexedDb's store to API server
function uploadFund() {
  const transaction = db.transaction(["new_fund"], "readwrite");
  const fundObjectStore = transaction.objectStore("new_fund")
  const getAll = fundObjectStore.getAll();
  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((serverResponse) => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          const transaction = db.transaction(["new_fund"], "readwrite");
          const fundObjectStore = transaction.objectStore("new_fund");
          fundObjectStore.clear();

          alert("All saved funds has been submitted!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

window.addEventListener('online', uploadFund);