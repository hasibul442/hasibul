import axios from "axios";

export const fetchGithubData = async () => {
   try {
      const response = await axios.get("https://api.github.com/users/hasibul442/repos?per_page=100");
      const starcounts = response.data.map(repo => repo.stargazers_count);
      const totalStars = starcounts.reduce((acc, count) => acc + count, 0);
      return totalStars;
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
};


export const getGithubProfileData = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/hasibul442");
      return {
        public_repos: response.data.public_repos,
        followers: response.data.followers
      }
    } catch (error) {
      console.error("Error fetching GitHub profile data:", error);
    }
  }