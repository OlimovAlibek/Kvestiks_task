document.querySelector('.btn-show-all').addEventListener('click', function() {
    const reviewsContainer = document.querySelector('.reviews-container');
    
    // Toggle the expanded class
    reviewsContainer.classList.toggle('expanded');
    
    // Change the button text based on the current state
    if (reviewsContainer.classList.contains('expanded')) {
      this.textContent = 'Show Less';
    } else {
      this.textContent = 'Show All';
    }
  });
  