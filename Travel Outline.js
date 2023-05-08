
		const scriptURL = 'https://script.google.com/macros/s/AKfycbzICxx7QQgpyuRTI24stYqthosuvZmS72OBhN5tzkQbm7HLKSkVFESs2wNw-HO1N6YJWg/exec'
		const form = document.forms['submit-to-google-sheet']

		form.addEventListener('submit', e => {
			e.preventDefault()
			fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => console.log('Success!', response))
			.catch(error => console.error('Error!', error.message))
		});