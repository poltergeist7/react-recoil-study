import React, {useState, useCallback} from 'react';
import styled from "@emotion/styled";
import {
	atom, // 하나의 상태 ReactState
	selector, 
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import { countState, nameState } from '../../src/store/nameStore';

//useRecoilState
const NameInput = () => {
    const [name, setName] = useRecoilState(nameState); // atom 의 값을 구독하여 업데이트 할 수 있는 hook. useState와 동일한 방식으로 사용 할 수 있다.
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            <input type="text" value={name} onChange={onChangeName} />
            <div>Name: {name}</div>
        </>
    )
}

const SomeOtherComponentWithName = () => {
    const name = useRecoilValue(nameState);
    return <div>{name}</div>
}


export default function Count() {
    // const [count, setCount] = useRecoilState(countState);

    // const increaseCountBtn = () => {
    //     setCount(count ++)
    // }
    return ( 
        <Wrapper>
            <ContainerWrapper>
            
               <NameInput />
               <SomeOtherComponentWithName />
            </ContainerWrapper>
        </Wrapper>
    );
} 

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: hotpink;
`;

const ContainerWrapper = styled.div`
    width: 500px;
    background-color: #fff;
    height: 500px;
    margin: 0 auto;
`;