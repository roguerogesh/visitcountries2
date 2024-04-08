import styled from 'styled-components'

export const ListItem = styled.li`
    list-type: none;
    width: 250px;
    hieght: 170px;
    background-color: #334155;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    
`

export const Image = styled.img`
    width: 250px;
    height: 150px;

`
export const NameAndButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const RemoveButton = styled.button`
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
    outline: none;

`
export const Name = styled.p`
    color: #ffffff;
    font-family: "Roboto";
    font-size: 15px;
    font-weight: bold;
`
