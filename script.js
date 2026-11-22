function openModal() {
            document.getElementById('modal-overlay').classList.add('active');
        }
        function closeModal() {
            document.getElementById('modal-overlay').classList.remove('active');
        }
       
        document.getElementById('modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        // Validation
        document.querySelector('.payment-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const card = document.getElementById('card').value.trim();
            const expiry = document.getElementById('expiry').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            if (name === '') { alert('Veuillez entrer votre nom complet.'); return; }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) { alert('Veuillez entrer une adresse e-mail valide.'); return; }

            const cardRegex = /^\d{16}$/;
            if (!cardRegex.test(card)) { alert('Le numéro de carte doit contenir exactement 16 chiffres.'); return; }

            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!expiryRegex.test(expiry)) { alert('La date d\'expiration doit être au format MM/AA.'); return; }

            const [month, year] = expiry.split('/');
            const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
            if (expiryDate < new Date()) { alert('Votre carte bancaire est expirée.'); return; }

            const cvvRegex = /^\d{3}$/;
            if (!cvvRegex.test(cvv)) { alert('Le code CVV doit contenir exactement 3 chiffres.'); return; }

            alert('Paiement validé avec succès !');
            closeModal();
        });