export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (
          Object.prototype.hasOwnProperty.call(report.allEmployees, department)
        ) {
          for (const employee of report.allEmployees[department]) {
            yield employee;
          }
        }
      }
    },
  };
}
