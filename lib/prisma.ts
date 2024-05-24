

import { PrismaClient } from '@prisma/client';

//declares a variable prisma of type Prismaclient 
let prisma: PrismaClient;
//here it determi9nes if this prisma client is neeeded in a production environment or, if not, whether a global prisma variables exists. if not, it makes one and sets it to the newe prisma client.
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

//exports our instance of hte prisma client to be used wherever it's needed
export default prisma;