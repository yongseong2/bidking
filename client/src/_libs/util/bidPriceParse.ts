/**입력한 input값을 세 자리 단위로 끊어 쉼표(,)를 찍어 리턴합니다. */
export function bidPriceParse(price: string): string {
  const num = price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num;
}

/**자동입찰가를 리턴합니다. 자동입찰가는 현재 입찰가의 10%이며, 1원 단위는 버립니다. */
export function askingPriceParse(price: number): string {
  return String(Math.floor((price * 1.1) / 10) * 10);
}

/**숫자만 입력했는지 검증합니다. */
export function validateBidPrice(price: string, callback: (arg: string) => void): void {
  const check = /^\d+$/;
  if (check.test(price) || price === '') return callback(price);
  else {
    alert('숫자만 입력할 수 있어요');
    return;
  }
}

/**입찰 시도가 올바른지 검증합니다. 초기화할 상태의 setter, 현재 가격, 최소 호가, 입찰 성공 후 다음에 할 동작을 입력받습니다.*/
export function tryBid(init: (arg: string) => void, currPrice: number, asking: string, price: string): boolean {
  init('');
  if (price.trim().length === 0) {
    alert('입찰가를 입력해야 해요');
    return false;
  }
  if (Number(price) <= currPrice) {
    alert('입찰가는 현재 가격보다 높아야 해요');
    return false;
  }
  return true;
}
