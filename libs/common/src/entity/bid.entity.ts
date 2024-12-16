import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bids')
export class Bid {
  @PrimaryGeneratedColumn({ name: 'bid_id' })
  bidId: number;
}
