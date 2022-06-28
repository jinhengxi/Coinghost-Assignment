import { atom } from 'recoil';

export interface DetailProps {
	id: number;
	title: string;
	contents: string;
	creator: { nickName: string };
	createdAt: string;
	defaultThumbnail: { url: string };
	likes: number;
	comments: number;
	views: number;
}

interface DataProps {
    nextID: number;
	nextTitle: string;
	nextCreatedAt: string;
	previousID: number;
	previousTitle: string;
	previousCreatedAt: string;
    data: DetailProps;

}

interface Props {
	data: DataProps
}

export const blogStore = atom<Props>({
	key: 'Blog',
	default: {
		data: {
            nextID: 0,
            nextTitle: '',
            nextCreatedAt: '',
            previousID: 0,
            previousTitle: '',
            previousCreatedAt: '',
			data: {
				id: 0,
				title: '',
				contents: '',
				creator: { nickName: '' },
				createdAt: '',
				defaultThumbnail: { url: '' },
				likes: 0,
				comments: 0,
				views: 0,
			},
		},
	},
});
