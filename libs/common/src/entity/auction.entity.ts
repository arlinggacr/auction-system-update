import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auctions')
export class Auction {
  @PrimaryGeneratedColumn({ name: 'auction_id' })
  auctionId: number;
}
