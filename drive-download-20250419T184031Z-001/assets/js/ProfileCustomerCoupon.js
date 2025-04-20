document.addEventListener('DOMContentLoaded', () => {
    const avatarImage = document.getElementById('sidebar-avatar'); // Target the avatar image by ID
    const modal = document.getElementById('avatar-modal');
    const closeModalBtn = modal.querySelector('.modal-close-btn');
    const cancelButton = modal.querySelector('.modal-button.cancel-button');
    const submitButton = modal.querySelector('.modal-button.submit-button');
    const uploadInput = document.getElementById('avatar-upload-input');
    const previewImage = document.getElementById('modal-avatar-img');
    const uploadLabel = modal.querySelector('.modal-button.upload-button'); // The label acting as upload button

    // --- Open Modal ---
    if (avatarImage) {
        avatarImage.addEventListener('click', () => {
            modal.style.display = 'flex'; // Show the modal overlay (using flex for centering)
        });
    } else {
        console.error("Sidebar avatar element not found.");
    }

    // --- Close Modal ---
    const closeModal = () => {
        modal.style.display = 'none';
        // Reset file input if needed
        uploadInput.value = '';
        // Reset preview to original avatar (optional)
        // previewImage.src = avatarImage ? avatarImage.src : 'default-placeholder.png';
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }

    // Close modal if clicking outside the content area
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- File Upload and Preview ---
    // The hidden file input is triggered natively by clicking the associated label (due to the 'for' attribute).
    // No need for an extra JS click listener on the label.

    // Handle file selection and preview
    if (uploadInput) {
        uploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImage.src = e.target.result;
                }
                reader.readAsDataURL(file);
            } else {
                // Handle non-image file selection or no file selected
                console.log("No valid image file selected.");
                // Optionally reset preview
                // previewImage.src = avatarImage ? avatarImage.src : 'default-placeholder.png';
            }
        });
    }

    // --- Submit Action (Placeholder) ---
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            console.log('Submit clicked. Implement actual avatar update logic here.');
            // TODO: Add logic to upload the file (e.g., using Fetch API)
            // After successful upload, update the sidebar avatar and close modal
            closeModal();
        });
    }

});
