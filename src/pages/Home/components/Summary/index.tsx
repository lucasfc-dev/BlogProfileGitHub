import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../../components/Loading";
import { api } from "../../../../api/api";

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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function getUserData(){
    try{
      const response = await api.get<GitHubUser>('/users/lucasfc-dev')
      setResponse(response.data)
    }
    catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getUserData()
    setIsLoading(false)
  }, [])

  return (
    isLoading ? <LoadingSpinner /> :
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
