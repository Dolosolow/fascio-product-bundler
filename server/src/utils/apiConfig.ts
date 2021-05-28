import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.bigcommerce.com/stores/20frharu/v3',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'd0qv4rna1kw4r78bg6qam3g78tl89go',
  },
});
