import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Summary() {

  interface GitHubUser {
    avatar_url: string
    name: string
    login: string
    bio: string
    html_url:string
    company: string
    followers: number
  }
  

  const [response, setResponse] = useState<GitHubUser | null>(null)

  const api = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 5000
  });

  useEffect(() => {
    api.get<GitHubUser>('/users/lucasfc-dev')
      .then((response) => setResponse(response.data))
  }, [])

  return (
    <SummaryContainer>
      <img src={response?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{response?.name}</h1>
          <a href={response?.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{response?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{response?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{response?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{response?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
