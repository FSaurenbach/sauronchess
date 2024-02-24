import korlibs.audio.sound.*
import korlibs.io.file.*
import korlibs.io.file.std.*
import korlibs.image.bitmap.*
import korlibs.image.atlas.*
import korlibs.image.font.*
import korlibs.image.format.*

// AUTO-GENERATED FILE! DO NOT MODIFY!

@Retention(AnnotationRetention.BINARY) annotation class ResourceVfsPath(val path: String)
inline class TypedVfsFile(val __file: VfsFile)
inline class TypedVfsFileTTF(val __file: VfsFile) {
  suspend fun read(): korlibs.image.font.TtfFont = this.__file.readTtfFont()
}
inline class TypedVfsFileBitmap(val __file: VfsFile) {
  suspend fun read(): korlibs.image.bitmap.Bitmap = this.__file.readBitmap()
  suspend fun readSlice(atlas: MutableAtlasUnit? = null, name: String? = null): BmpSlice = this.__file.readBitmapSlice(name, atlas)
}
inline class TypedVfsFileSound(val __file: VfsFile) {
  suspend fun read(): korlibs.audio.sound.Sound = this.__file.readSound()
}
interface TypedAtlas<T>

object KR : __KR.KR

object __KR {
	
	interface KR {
		val __file get() = resourcesVfs[""]
		@ResourceVfsPath("b_bishop.png") val `bBishop` get() = TypedVfsFileBitmap(resourcesVfs["b_bishop.png"])
		@ResourceVfsPath("b_king.png") val `bKing` get() = TypedVfsFileBitmap(resourcesVfs["b_king.png"])
		@ResourceVfsPath("b_knight.png") val `bKnight` get() = TypedVfsFileBitmap(resourcesVfs["b_knight.png"])
		@ResourceVfsPath("b_pawn.png") val `bPawn` get() = TypedVfsFileBitmap(resourcesVfs["b_pawn.png"])
		@ResourceVfsPath("b_queen.png") val `bQueen` get() = TypedVfsFileBitmap(resourcesVfs["b_queen.png"])
		@ResourceVfsPath("b_rook.png") val `bRook` get() = TypedVfsFileBitmap(resourcesVfs["b_rook.png"])
		@ResourceVfsPath("korge.png") val `korge` get() = TypedVfsFileBitmap(resourcesVfs["korge.png"])
		@ResourceVfsPath("square_brown_dark.png") val `squareBrownDark` get() = TypedVfsFileBitmap(resourcesVfs["square_brown_dark.png"])
		@ResourceVfsPath("square_brown_light.png") val `squareBrownLight` get() = TypedVfsFileBitmap(resourcesVfs["square_brown_light.png"])
		@ResourceVfsPath("square_gray_dark.png") val `squareGrayDark` get() = TypedVfsFileBitmap(resourcesVfs["square_gray_dark.png"])
		@ResourceVfsPath("square_gray_light.png") val `squareGrayLight` get() = TypedVfsFileBitmap(resourcesVfs["square_gray_light.png"])
		@ResourceVfsPath("w_bishop.png") val `wBishop` get() = TypedVfsFileBitmap(resourcesVfs["w_bishop.png"])
		@ResourceVfsPath("w_king.png") val `wKing` get() = TypedVfsFileBitmap(resourcesVfs["w_king.png"])
		@ResourceVfsPath("w_knight.png") val `wKnight` get() = TypedVfsFileBitmap(resourcesVfs["w_knight.png"])
		@ResourceVfsPath("w_pawn.png") val `wPawn` get() = TypedVfsFileBitmap(resourcesVfs["w_pawn.png"])
		@ResourceVfsPath("w_queen.png") val `wQueen` get() = TypedVfsFileBitmap(resourcesVfs["w_queen.png"])
		@ResourceVfsPath("w_rook.png") val `wRook` get() = TypedVfsFileBitmap(resourcesVfs["w_rook.png"])
	}
}
