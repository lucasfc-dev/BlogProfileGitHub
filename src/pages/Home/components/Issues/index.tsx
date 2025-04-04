// import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink,TruncatedText } from "./styles";
import { api } from "../../../../api/api";
import { useEffect, useState } from "react";

export function Issues() {
  interface Item {
    id: number
    title: string
    created_at: string
    body: string
  }

  const [responseIssues, setResponseIssues] = useState<Item[] | null>(null)

  async function getIssuesData() {
    try {
      const response = await api.get('https://api.github.com/search/issues?q=repo:lucaspedronet/BlogProfileGitHub')
      setResponseIssues(response.data.items)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getIssuesData()
  }, [])

  return (
    <>
      {responseIssues?.map((item: Item) => {
        return (
          <IssuesContainer key={item.id}>
            <StyledNavLink to="/issue">
              <div>
                <h2>{item.title}</h2>
                <span>
                  Há {Math.ceil(Math.abs(Date.now() - new Date(item.created_at).getTime()) / (1000 * 60 * 60 * 24))} dias 
                </span>
              </div>
              <TruncatedText>{item.body}</TruncatedText>
            </StyledNavLink>
          </IssuesContainer>
        )
      })
      }
    </>

  );
}
