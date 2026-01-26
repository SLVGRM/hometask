interface Person {
    name: string;
}

interface Employee {
    company: string;
}

type myWorker = Person & Employee;
а
const worker: myWorker = {
    name: "Алексей",
    company: "TechCorp",
};

console.log(worker)