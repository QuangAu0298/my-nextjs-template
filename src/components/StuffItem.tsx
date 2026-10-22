'use client';
import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ name, quantity, condition, id }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>
      <Link href={`/edit/${id}`}>Edit</Link>
    </td>
    <td><Button color='red' onClick={()=>removeItem(id)}><Trash /></Button></td>
  </tr>
);

function removeItem(ID: number) {
  console.log(ID);
}

export default StuffItem;
