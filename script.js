const API_KEY = 'TU_CLAVE_DE_API'; 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
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const chatlog = document.getElementById('chatlog');
const usermsg = document.getElementById('usermsg');
const sendbtn = document.getElementById('sendbtn');

sendbtn.addEventListener('click', () => {
  const userMessage = usermsg.value.trim();
  if (userMessage === '') {
    return;
  }

  const data = {
    prompt: `Conversación:\nUsuario
