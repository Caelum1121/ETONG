function updateLanguage(lang) {
  console.log(`Updating language to: ${lang}`); // Debugging log

  if (lang === 'en') {
      document.querySelectorAll('.chinese').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding Chinese element:', elem); // Debugging log
      });
      document.querySelectorAll('.english').forEach(elem => {
          elem.style.display = 'block';
          console.log('Showing English element:', elem); // Debugging log
      });
      document.querySelectorAll('.vietnamese').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding Vietnamese element:', elem); // Debugging log
      });
  } else if (lang === 'zh-Hant') {
      document.querySelectorAll('.chinese').forEach(elem => {
          elem.style.display = 'block';
          console.log('Showing Chinese element:', elem); // Debugging log
      });
      document.querySelectorAll('.english').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding English element:', elem); // Debugging log
      });
      document.querySelectorAll('.vietnamese').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding Vietnamese element:', elem); // Debugging log
      });
  } else if (lang === 'vi') { // Vietnamese language code
      document.querySelectorAll('.vietnamese').forEach(elem => {
          elem.style.display = 'block';
          console.log('Showing Vietnamese element:', elem); // Debugging log
      });
      document.querySelectorAll('.english').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding English element:', elem); // Debugging log
      });
      document.querySelectorAll('.chinese').forEach(elem => {
          elem.style.display = 'none';
          console.log('Hiding Chinese element:', elem); // Debugging log
      });
  }
}

// Get user's browser language preference
let lang = navigator.language.slice(0, 2);
if (lang !== 'en' && lang !== 'zh-Hant' && lang !== 'vi') {
  lang = 'en';  // Fallback to English if not Chinese, Vietnamese, or English
}

// Set the default selection based on browser language
document.getElementById('language-select').value = lang;

// Update the displayed language based on browser language
updateLanguage(lang);

// Add event listener for dropdown change
document.getElementById('language-select').addEventListener('change', function() {
  const selectedLang = this.value;
  updateLanguage(selectedLang);
});


