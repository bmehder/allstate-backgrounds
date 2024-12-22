import { FORMSPARK_ID, BOTPOISON_KEY } from "$env/static/private";

export async function load() {
  return {
    FORMSPARK_ID,
    BOTPOISON_KEY,
  };
}
