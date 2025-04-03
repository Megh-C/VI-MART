import { auth, db } from "./firebase-config.js";
import { getDoc, doc, updateDoc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profilePhone = document.getElementById("profile-phone");
const editProfileBtn = document.getElementById("edit-profile");
const deleteProfileBtn = document.getElementById("delete-profile");
const logoutBtn = document.getElementById("logout");

const editModal = document.getElementById("edit-profile-modal");
const closeModal = document.getElementById("close-modal");
const editNameInput = document.getElementById("edit-name");
const editPhoneInput = document.getElementById("edit-phone");
const saveProfileBtn = document.getElementById("save-profile");

// Get current user
auth.onAuthStateChanged(async (user) => {
    if (user) {
        profileEmail.textContent = user.email;
        loadUserProfile(user.uid);
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

// Load user profile from Firestore
async function loadUserProfile(uid) {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
        const data = userDoc.data();
        profileName.textContent = data.name || "No Name Set";
        profilePhone.textContent = data.phone || "No Phone Set";
    }
}

// Open edit profile modal
editProfileBtn.addEventListener("click", () => {
    editModal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
    editModal.style.display = "none";
});

// Save profile changes
saveProfileBtn.addEventListener("click", () => {
    const newName = editNameInput.value.trim();
    const newPhone = editPhoneInput.value.trim();

    if (newName) profileName.innerText = newName;
    if (newPhone) profilePhone.innerText = newPhone;

    // Hide the modal
    editModal.style.display = "none";
});

// Ensure the close button also works
closeModal.addEventListener("click", () => {
    editModal.style.display = "none";
});



// Delete profile
deleteProfileBtn.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (user) {
        await deleteDoc(doc(db, "users", user.uid));
        alert("Profile deleted!");
        window.location.href = "login.html";
    }
});

// Logout
logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
});
