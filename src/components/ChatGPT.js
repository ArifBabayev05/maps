import axios from 'axios';

const generateText = async (prompt) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const model = 'text-davinci-003';
  const maxTokens = 50;
  const n = 1;
  const temperature = 0.5;
  
  const response = await axios.post('https://api.openai.com/v1/engines/' + model + '/completions', {
    prompt: prompt,
    max_tokens: maxTokens,
    n: n,
    temperature: temperature,
  }, {
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}

const getGeneratedText = async (address) => {
  const prompt = `What place can I tell you about? ${address}`;
  const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: "."
    })
  });
  const data = await response.json();
  console.log("Data:", data);
  const generatedText = data.choices[0].text.trim();
  console.log("Gpt Text", generatedText);
  return generatedText;
};

export { generateText, getGeneratedText };
