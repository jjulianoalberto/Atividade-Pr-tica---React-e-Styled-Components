import styled from "styled-components"

export const Wrapper = styled.section`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position: relative;

`

export const ImgHeader = styled.img `
    width: 1000px;
    height: 300px;
    object-fit: cover;
`

export const ImgFooter = styled.img `
    width: 1000px;
    height: 200px;
    object-fit: cover;
`

export const TittleFooter = styled.h1 `
    position: absolute;
    z-index: 2;
    color: white;
    top: 2160px;
`

export const TittleHeader = styled.h1 `
    position: absolute;
    z-index: 2;
    color: white;
    top: 130px;
`

export const Content = styled.section`
    display: flex;
    flex-direction: row;
    

    img {
        width: 500px;
        height: 500px;
        object-fit: cover;
    }

    div {
        width: 500px;
        height: 500px;
        background-color: white;
    }

    h1 {
        margin-left: 90px;
        margin-top: 60px;
    }
    
    p {
        margin-left: 90px;
        margin-right: 90px;
    }
`

export const FooterStyled = styled.footer`
width: 1000px;
height: 150px;
background-color: white;
color: #107AF1;
display: flex;
align-items: center;
justify-content: space-around;

li {
  list-style: none;
  display: inline-flex;
  margin: 10px;
}

small {
  margin-left: 10px;
  color: #959BA0;
}

a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  color: #107AF1;
}

span {
  font-size: 24px;
  color: #107AF1;
  margin: 5px;
}
`
