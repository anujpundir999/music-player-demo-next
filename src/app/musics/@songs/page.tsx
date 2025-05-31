import { Clock, Heart} from 'lucide-react';
import Link from 'next/link'
const SongList = async() => {
    await new Promise((resolve)=>(
        setTimeout(()=>{
            resolve("Content is currently Loading")}
            ,500
        )
    ));
    const songs = [
  { id: 1, artist: "The Beatles", title: "Let It Be", time: "4:03" },
  { id: 2, artist: "Taylor Swift", title: "Love Story", time: "3:55" },
  { id: 3, artist: "Drake", title: "God's Plan", time: "3:19" },
  { id: 4, artist: "Adele", title: "Hello", time: "4:55" },
  { id: 5, artist: "Ed Sheeran", title: "Shape of You", time: "3:53" }
    ];
    return (
    <div className="w-[96%] mx-auto px-4">
        <h2 className="text-3xl text-white mt-8 mb-6 font-bold">
            Songs Collection
        </h2>
        <ul className="space-y-4">
            {songs.map(song=>(
                <Link href={`/musics/${song.id}`} key={song.id}>
                    <li  className="flex item-center justify-between p-3 hover:bg-[#2A2929]
                    transition-all duration-200 ease-in-out transform hover:scale-105 rounded-lg">
                        <div className="flex item-center gap-5 ">
                            <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fHww"
                            className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0 " />
                        </div>
                        <div>
                            <p className="text-white font-medium">
                                {song.artist}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {song.title}
                            </p>
                        </div>
                        <div className="flex items-center gap-6 text-gray-600">
                            <div className="flex items-center gap-1">
                                <Clock size={16}/>
                                <span>{song.time}</span>
                            </div>
                            <Heart size={16} className="cursor-pointer hover:text-red-500"/>
                            <button className="font-bold text-lg">︙</button>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default SongList