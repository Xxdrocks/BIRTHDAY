document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman saat submit form

    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    
    if (name.trim() !== '' && message.trim() !== '') {
      
      const newWishBox = document.createElement('div');
      newWishBox.classList.add('wish-box');

      
      const randomAvatar = Math.floor(Math.random() * 5) + 1;
      const avatarImg = document.createElement('img');
      avatarImg.src = `assets/Avatar/avatar (${randomAvatar}).png`;
      avatarImg.alt = 'Avatar';

      
      const wishMessage = document.createElement('p');
      wishMessage.textContent = `${name}: "${message}"`;

      
      newWishBox.appendChild(avatarImg);
      newWishBox.appendChild(wishMessage);

      const wishContent = document.querySelector('.wish-content');
      wishContent.appendChild(newWishBox);

      
      document.getElementById('wishForm').reset();
    } else {
      alert('Nama dan pesan tidak boleh kosong!');
    }
  });