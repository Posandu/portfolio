export type NowPlaying =
	| false
	| {
			albumImageUrl: string;
			artist: string;
			isPlaying: boolean;
			songUrl: string;
			title: string;
	  };

export async function getSpotifyData() {
	if (typeof window === 'undefined') return false;

	const response = await fetch('/api/');

	const data: NowPlaying = await response.json();

	if (!data) return false;

	return data;
}
