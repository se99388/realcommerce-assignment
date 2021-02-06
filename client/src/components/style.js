import styled from 'styled-components';


export const ContainerForm = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width:80%;
    border: 1px solid grey;
    margin:auto;
    margin-top:10px;
`
export const Row = styled.div`
    &:after{
        content: "";
        display: table;
        clear: both;
    }
`
export const ColLabel = styled.div`
    float: left;
    width: 25%;
    margin-top: 6px;
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 0;
      }
`
export const ColInput = styled.div`
    float: left;
    width: 75%;
    margin-top: 6px;
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 0;
      }
`;

export const ErrorDiv = styled.div`
    color:red;
`;

export const Input = styled.input`
    width: 95%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

export const Label = styled.label`
    padding: 12px 12px 12px 0;
    display: inline-block;
`;

export const Button = styled.button`
    background-color: #007bff;;
    color: white;
    padding: 12px 20px;
    border: none;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 0;
      }
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 90%;
    border: 1px solid black;
    margin:auto;
    margin-top:10px;
`;

export const Tr = styled.tr`
    text-align: left;
    padding: 8px;
    border: 1px solid black;
    &:nth-child(even) 
    {background-color: #DCDCDC;}
`;

export const Td = styled.td`
    text-align: ${props => props.center ? "center" : "left"};
    padding: 8px;
    border: 1px solid black;
`;

export const Th = styled.th`
    text-align: CENTER;
    padding: 8px;
    border: 1px solid black;
`;
