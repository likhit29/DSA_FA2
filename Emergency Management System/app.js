
class Patient{
    constructor(name, criticalLevel){
        this.name = name;
        this.criticalLevel = criticalLevel;
    }

    toString(){
        return `${this.name} (Critical Level: ${this.criticalLevel})`;
    }
}


class EmergencyRoom{
    constructor(){
        this.patientQueue = [];
        this.criticalPatients = [];
    }

    addPatient(patient){
        if(patient.criticalLevel >= 7){
            this.criticalPatients.push(patient); 
        }
        else{
            this.patientQueue.push(patient); 
        }
    }
    
    treatNextPatient(){
        if(this.criticalPatients.length > 0){
            const patient = this.criticalPatients.pop();
            return `Treating critical patient: ${patient}`;
        }
        else if(this.patientQueue.length > 0){
            const patient = this.patientQueue.shift(); 
            return `Treating patient: ${patient}`;
        }else{
            return "No patients to treat.";
        }
    }

    listPatients(){
        if(this.patientQueue.length === 0 && this.criticalPatients.length === 0) {
            return "No patients in the emergency room.";
        }
        let result = "<ul>";
        // Add patients from the normal queue
        if (this.patientQueue.length > 0) {
            result += "<li><strong>Patients in queue:</strong></li>";
            this.patientQueue.forEach(patient => {
                result += `<li>${patient}</li>`;
            });
        }
        // Add critical patients
        if (this.criticalPatients.length > 0) {
            result += "<li><strong>Critical patients:</strong></li>";
            this.criticalPatients.forEach(patient => {
                result += `<li>${patient}</li>`;
            });
        }
        result += "</ul>";
        return result;
    }
    
}


const emergencyRoom = new EmergencyRoom();


function addPatient(){
    const name = document.getElementById('patientName').value;
    const criticalLevel = parseInt(document.getElementById('criticalLevel').value);

    if(criticalLevel >= 1 && criticalLevel <= 10){
        const patient = new Patient(name, criticalLevel);
        emergencyRoom.addPatient(patient);
        document.getElementById('output').textContent = `Added patient: ${patient}`;
        document.getElementById('patientName').value = "";
        document.getElementById('criticalLevel').value = "";
    }
    else{
        document.getElementById('output').textContent = "Please enter a valid name and critical level (1-10).";
    }
}

function treatPatient(){
    const result = emergencyRoom.treatNextPatient();
    document.getElementById('output').textContent = result;
}

function listPatients(){
    const result = emergencyRoom.listPatients();
    document.getElementById('output').innerHTML = result;
}
