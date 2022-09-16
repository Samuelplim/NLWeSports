-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gameId" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "YearsPlaying" INTEGER NOT NULL,
    "Discord" TEXT NOT NULL,
    "WeekDays" TEXT NOT NULL,
    "HourStart" INTEGER NOT NULL,
    "HourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
