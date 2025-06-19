function encrypt() {
  const method = document.getElementById('methodSelect').value;
  const text = document.getElementById('inputText').value;
  let result = '';

  if (method === 'base64') {
    result = btoa(text);
  } else if (method === 'caesar') {
    result = caesarCipher(text, 3);
  } else if (method === 'xor') {
    result = xorCipher(text, 42);
  }

  document.getElementById('outputText').value = result;
}

function decrypt() {
  const method = document.getElementById('methodSelect').value;
  const text = document.getElementById('inputText').value;
  let result = '';

  if (method === 'base64') {
    try {
      result = atob(text);
    } catch {
      result = 'Invalid Base64!';
    }
  } else if (method === 'caesar') {
    result = caesarCipher(text, -3);
  } else if (method === 'xor') {
    result = xorCipher(text, 42);
  }

  document.getElementById('outputText').value = result;
}

function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(code + shift);
  }).join('');
}

function xorCipher(str, key) {
  return str.split('').map(char =>
    String.fromCharCode(char.charCodeAt(0) ^ key)
  ).join('');
}
