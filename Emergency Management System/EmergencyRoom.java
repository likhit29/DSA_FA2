import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.Stack;

class Patient {
    String name;
    int criticalLevel; // Higher value means more critical

    public Patient(String name, int criticalLevel) {
        this.name = name;
        this.criticalLevel = criticalLevel;
    }

    @Override
    public String toString() {
        return name + " (Critical Level: " + criticalLevel + ")";
    }
}

class EmergencyRoom {
    private Queue<Patient> patientQueue;
    private Stack<Patient> criticalPatients;

    public EmergencyRoom() {
        patientQueue = new LinkedList<>();
        criticalPatients = new Stack<>();
    }

    public void addPatient(Patient patient) {
        if (patient.criticalLevel >= 8) {
            // If patient is critical, add to the stack
            criticalPatients.push(patient);
        } else {
            // Otherwise, add to the queue
            patientQueue.offer(patient);
        }
    }

    public void treatNextPatient() {
        if (!criticalPatients.isEmpty()) {
            // Treat critical patients first
            Patient patient = criticalPatients.pop();
            System.out.println("Treating critical patient: " + patient);
        } else if (!patientQueue.isEmpty()) {
            // Then treat normal patients
            Patient patient = patientQueue.poll();
            System.out.println("Treating patient: " + patient);
        } else {
            System.out.println("No patients to treat.");
        }
    }

    public void listPatients() {
        System.out.println("Patients in queue:");
        // Using a temporary stack to list patients in the queue
        Stack<Patient> tempStack = new Stack<>();
        
        // Move patients from queue to temp stack to list them
        while (!patientQueue.isEmpty()) {
            Patient patient = patientQueue.poll();
            System.out.println(patient); // Print patient
            tempStack.push(patient); // Store in temp stack
        }

        // Move patients back to the original queue
        while (!tempStack.isEmpty()) {
            patientQueue.offer(tempStack.pop());
        }

        System.out.println("Critical patients:");
        // Using a temporary stack to list critical patients without emptying the original stack
        Stack<Patient> tempCriticalStack = new Stack<>();
        
        // List critical patients
        while (!criticalPatients.isEmpty()) {
            Patient patient = criticalPatients.pop();
            System.out.println(patient); // Print patient
            tempCriticalStack.push(patient); // Store in temp stack
        }

        // Move patients back to the original stack
        while (!tempCriticalStack.isEmpty()) {
            criticalPatients.push(tempCriticalStack.pop());
        }
    }

    public static void main(String[] args) {
        EmergencyRoom er = new EmergencyRoom();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("\n--- Emergency Room Menu ---");
            System.out.println("1. Add Patient");
            System.out.println("2. List Patients");
            System.out.println("3. Treat Next Patient");
            System.out.println("4. Exit");
            System.out.print("Select an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    // Add Patient
                    System.out.print("Enter patient name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter critical level (0-10): ");
                    int criticalLevel = scanner.nextInt();
                    er.addPatient(new Patient(name, criticalLevel));
                    System.out.println("Patient added: " + name + " (Critical Level: " + criticalLevel + ")");
                    break;
                case 2:
                    // List Patients
                    er.listPatients();
                    break;
                case 3:
                    // Treat Next Patient
                    er.treatNextPatient();
                    break;
                case 4:
                    // Exit
                    running = false;
                    System.out.println("Exiting the Emergency Room system.");
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }

        scanner.close();
    }
}
