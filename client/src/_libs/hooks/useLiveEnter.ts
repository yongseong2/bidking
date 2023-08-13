import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { enter } from '../../api/live';
import { useAppSelector } from '../../store/hooks';
import { store } from '../../store/store';

export function useLiveEnter() {
  const [userId, setUserId] = useState<number>(0);
  const [auctionRoomId, setAuctionRoomId] = useState<number>(0);
  const [nickname, setNickname] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [auctionRoomType, setAuctionRoomType] = useState<string>('');
  const [liveAuthErr, setLiveAuthErr] = useState<unknown>(null);
  const { accessToken } = useAppSelector(state => state.user);

  useEffect(() => {
    try {
      const auctionId = useParams<string>();
      (async () => {
        const isLogined = await store.getState().user.isLogined;
        if (!isLogined) throw new Error('403');
        else {
          const uid = (await store.getState().user.id) || 0;
          const data = await enter(Number(auctionId), accessToken);
          setUserId(uid);
          setAuctionRoomId(data.auctionRoomId);
          setNickname(data.nickname);
          setTitle(data.title);
          setAuctionRoomType(data.auctionRoomType);
        }
      })();
    } catch (err) {
      setLiveAuthErr(err);
    }
  });

  return { userId, auctionRoomId, auctionRoomType, nickname, title, liveAuthErr };
}
