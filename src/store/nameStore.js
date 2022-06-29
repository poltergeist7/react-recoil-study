import {
	atom, // 하나의 상태 ReactState
	selector, 
	useRecoilState,
	useRecoilValue,
} from 'recoil';

// default 값 정의
export const nameState = atom({
    key: 'nameState',
    default: 'Jane Doe'
})