package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlin.properties.*

class Settings : Container() {
    internal val amountOfOptions = 4
    internal var currentNo = 1
    internal var background: RoundRect by Delegates.notNull()

    inner class AboutPage : Container() {

        init {
            val background = roundRect(
                Size((DisplayConfig.chessBoardWidth / 2) * 1.7, (DisplayConfig.chessBoardHeight / 3) * 1.7),
                radius = RectCorners(10)
            ) {
                fill = if (UserSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeWhite
            }
            val bg = roundRect(Size(500, background.height - 30), RectCorners(10), Colors.LIGHTGRAY) {
                centerOn(background)
            }

            image(Images.creditsSvg!!).scale(0.5).centerOn(bg)
            val exitButton = SettingsButton(SettingsKind.About)
            exitButton.centerXOn(bg)
            exitButton.positionY(bg.y + bg.height / 4)
            exitButton.zIndex(33)
            exitButton.addTo(this@Settings)


        }
    }

    inner class SettingsButton(private val settingsKind: SettingsKind) : Container() {
        private var baseButton: RoundRect by Delegates.notNull()

        init {
            baseButton =
                roundRect(Size(200, 50), radius = RectCorners(10), fill = Colors.DARKGRAY).centerXOn(this@Settings)
                    .centerYBetween(
                        this@Settings.y + this@Settings.height / (1 + amountOfOptions) * currentNo,
                        this@Settings.y + this@Settings.height / (1 + amountOfOptions) * currentNo
                    )

            when (settingsKind) {
                SettingsKind.DarkMode -> {
                    text("Dark mode", 30, Colors.BLACK).centerOn(baseButton)
                    baseButton.color = if (UserSettings.darkMode) Colors.GREEN else Colors.RED
                }

                SettingsKind.About -> text("About", 30, Colors.BLACK).centerOn(baseButton)
                SettingsKind.Exit -> text("Exit", 30, Colors.BLACK).centerOn(baseButton)
                SettingsKind.AutoPromote -> {
                    text("Auto promote", 30, Colors.BLACK).centerOn(baseButton)
                    baseButton.color = if (UserSettings.autoPromote) Colors.GREEN else Colors.RED
                }

            }

            onClick {
                when (settingsKind) {
                    SettingsKind.DarkMode -> handleDarkModeClick()
                    SettingsKind.About -> handleAboutClick()
                    SettingsKind.AutoPromote -> handleAutoPromoteClick()
                    SettingsKind.Exit -> handleExitClick()

                }
            }


            currentNo++

        }

        private fun handleAutoPromoteClick() {
            UserSettings.autoPromote = !UserSettings.autoPromote
            if (UserSettings.autoPromote) baseButton.color = (Colors.GREEN) else baseButton.color = Colors.RED
        }


        private fun handleDarkModeClick() {
            UserSettings.darkMode = !UserSettings.darkMode
            reloadCells()
            if (UserSettings.darkMode) {
                background.color = (ThemeColors.darkModeBlack)
                baseButton.color = (Colors.GREEN)
            } else {
                background.color = (ThemeColors.whiteModeWhite)
                baseButton.color = (Colors.RED)
            }
        }

        private fun handleAboutClick() {
            if (GameState.aboutPageInForeground) {
                GameState.settingsContainer.findViewByName("AboutPage")?.removeFromParent()
                GameState.aboutPageInForeground = false
                return
            }
            solidRect(background.width, background.height, Colors["#000000"].withAd(0.3))
            AboutPage().name("AboutPage").addTo(GameState.settingsContainer).centerOnStage()
            GameState.aboutPageInForeground = true

        }

        private fun handleExitClick() {
            GameState.settingsInForeground = false
            GameState.settingsContainer.removeFromParent()
        }

    }

    enum class SettingsKind {
        DarkMode, About, AutoPromote, Exit
    }

    init {

        // Background
        background = roundRect(
            Size(DisplayConfig.chessBoardWidth / 1.5, DisplayConfig.chessBoardHeight / 1.5),
            radius = RectCorners(15),
        )
        background.color = if (UserSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeWhite

        // Dark mode button
        SettingsButton(SettingsKind.DarkMode).addTo(this)
        SettingsButton(SettingsKind.About).addTo(this)
        SettingsButton(SettingsKind.AutoPromote).addTo(this)
        SettingsButton(SettingsKind.Exit).addTo(this)
    }
}

fun showSettings() {
    GameState.settingsContainer = GameState.sceneContainer.container()

    GameState.settingsContainer.solidRect(
        DisplayConfig.chessBoardWidth + 18, DisplayConfig.chessBoardHeight + 18, Colors["#000000"].withAd(0.6)
    ).centerOnStage()
    Settings().addTo(GameState.settingsContainer).centerOnStage()
    GameState.settingsInForeground = true
}
